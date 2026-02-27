import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = [];
    const meteors = [];

    const numStars = 500;
    const numMeteors = 3;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        alpha: Math.random() * 0.8,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    for (let i = 0; i < numMeteors; i++) {
      meteors.push({
        x: Math.random() * width,
        y: Math.random() * height / 2,
        length: Math.random() * 80 + 100,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4,
        alpha: 0,
        delay: Math.random() * 500,
      });
    }

    const animate = () => {
      const getCssVar = (name, fallback) =>
        getComputedStyle(document.documentElement).getPropertyValue(name) || fallback;

      // Vamos diferenciar claro e escuro
      const isDark = document.documentElement.classList.contains("dark");

      // Se estiver escuro, usa seu gradiente antigo
      let gradient;
      if (isDark) {
        const backgroundTop = getCssVar("--color-background", "#0b0c10");
        const backgroundBottom = getCssVar("--color-card", "#1c1f27");
        gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, backgroundTop);
        gradient.addColorStop(1, backgroundBottom);
      } else {
        // Modo claro: pedacinho de céu azul em cima
        gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "#a8d0e6");  // céu azul clarinho
        gradient.addColorStop(0.3, "#e0f7fa"); // quase branco azulado
        gradient.addColorStop(1, "#fefefe");   // base neutra
      }

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Estrelas
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1) star.alpha = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        // No claro, diminuí o brilho para não ficar forte demais
        ctx.fillStyle = isDark
          ? `rgba(255,255,255,${star.alpha})`
          : `rgba(255,255,255,${star.alpha * 0.4})`;
        ctx.fill();
      });

      // Meteoros
      meteors.forEach((meteor) => {
        meteor.delay--;
        if (meteor.delay > 0) return;

        meteor.x -= meteor.speed * Math.cos(meteor.angle);
        meteor.y += meteor.speed * Math.sin(meteor.angle);

        meteor.alpha += 0.02;
        if (meteor.alpha > 1) meteor.alpha = 1;

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x + Math.cos(meteor.angle) * meteor.length,
          meteor.y - Math.sin(meteor.angle) * meteor.length
        );
        ctx.strokeStyle = isDark
          ? `rgba(255,255,255,${meteor.alpha})`
          : `rgba(255,255,255,${meteor.alpha * 0.5})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.stroke();

        if (meteor.x < -meteor.length || meteor.y > height + meteor.length) {
          meteor.x = Math.random() * width;
          meteor.y = Math.random() * height / 2;
          meteor.alpha = 0;
          meteor.delay = Math.random() * 500;
          meteor.speed = Math.random() * 8 + 6;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};