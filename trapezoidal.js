function trapezoidalRule(f, a, b, n) {
    const h = (b - a) / n;
    let sum = 0.5 * (f(a) + f(b));
    for (let i = 1; i < n; i++) {
      sum += f(a + i * h);
    }
    return sum * h;
  }
  
  // Example: ∫₀¹ x² dx
  const result = trapezoidalRule(x => x * x, 0, 1, 64);
  console.log("Approximate ∫₀¹ x² dx =", result.toFixed(6));
  