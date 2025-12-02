import { Button } from "@/components/ui/button";

const JoinSection = () => {
  return (
    <section className="w-full bg-[#cbbfa8] py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="font-mono text-lg md:text-xl text-black/80 tracking-wide mb-8">
          Identifique-se. A verdade é a única moeda aceita.
        </p>
        
        <Button
          variant="outline"
          asChild
          className="border-black text-black bg-transparent hover:bg-black hover:text-[#cbbfa8] transition-all duration-300 tracking-widest text-xs uppercase px-10 py-6"
        >
          <a 
            href="https://forms.gle/W5eLQxFcyWpE4HQ1A" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Iniciar Protocolo de Colaboração
          </a>
        </Button>
      </div>
    </section>
  );
};

export default JoinSection;
