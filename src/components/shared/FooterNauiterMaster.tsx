const FooterNauiterMaster = () => {
  return (
    <footer 
      className="w-full bg-[#0E0E0E] border-t border-white/5 py-8 animate-fade-in-footer"
      style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.4)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p 
            className="text-white transition-colors hover:text-[#00C4FF]"
            style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
          >
            © 2025 Developer — Nauiter Master | Todos os direitos reservados
          </p>
          <p 
            className="text-white/70 italic"
            style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)' }}
          >
            Sic Mundus Creatus Est
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNauiterMaster;
