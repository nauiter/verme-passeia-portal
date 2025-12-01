import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm font-mono">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="Voltar para página inicial"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Início</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
            {item.path ? (
              <Link
                to={item.path}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
