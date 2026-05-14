export interface Service {
  id: number;
  icon: string;
  title: string;
  items: string[];
  color: "cyan" | "magenta" | "yellow";
  cols: string;
  tag: string;
  note?: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "🖨️",
    title: "Impresión y Copiado",
    items: ["Copias e impresiones", "Tamaños: carta y oficio", "Papel normal, fotográfico, opalina y más"],
    note: "El ajuste a medidas específicas o el acomodo de varias imágenes por hoja tiene un costo adicional debido a la edición.",
    color: "cyan",
    cols: "md:col-span-2",
    tag: "IMPRESIÓN"
  },
  {
    id: 2,
    icon: "📸",
    title: "Fotografías",
    items: ["Fotos tamaño infantil", "Papel brillante", "Papel mate"],
    color: "magenta",
    cols: "md:col-span-1",
    tag: "ESTUDIO"
  },
  {
    id: 3,
    icon: "🧾",
    title: "Enmicados",
    items: ["Protege tus documentos", "Mejor presentación", "Variedad de tamaños"],
    color: "yellow",
    cols: "md:col-span-1",
    tag: "ACABADOS"
  },
  {
    id: 4,
    icon: "📁",
    title: "Productos",
    items: ["Folders (color y kraft)", "Hojas de color", "Sobres de papel kraft"],
    color: "cyan",
    cols: "md:col-span-1",
    tag: "PAPELERÍA"
  },
  {
    id: 5,
    icon: "📱",
    title: "Servicios",
    items: ["Recargas telefónicas", "💳 Aceptamos pagos con tarjeta"],
    color: "magenta",
    cols: "md:col-span-1",
    tag: "DIGITAL"
  },
  {
    id: 6,
    icon: "🏛️",
    title: "Trámites SAT",
    items: [
      "RFC Original del SAT",
      "RFC válido",
      "RFC Genérico (exprés)",
      "RFC IDCIF (exprés)",
      "Búsqueda de IDCIF",
      "Cita SAT",
      "Obtención de CURP",
    ],
    color: "yellow",
    cols: "md:col-span-2",
    tag: "SAT"
  },
  {
    id: 7,
    icon: "📜",
    title: "Actas Civiles",
    items: [
      "Acta de Nacimiento",
      "Acta de Matrimonio",
      "Acta de Divorcio",
      "Acta de Defunción",
    ],
    color: "cyan",
    cols: "md:col-span-1",
    tag: "ACTAS"
  },
  {
    id: 8,
    icon: "🏥",
    title: "Trámites IMSS",
    items: [
      "Número de Seguridad Social",
      "Semanas cotizadas",
    ],
    color: "magenta",
    cols: "md:col-span-1",
    tag: "IMSS"
  },
  {
    id: 9,
    icon: "📋",
    title: "Trámites Administrativos",
    items: [
      "Antecedentes no penales (Edomex)",
      "Recibo de luz (CFE)",
    ],
    color: "yellow",
    cols: "md:col-span-1",
    tag: "GOB."
  },
];

export const themeStyles = {
  cyan: {
    bg: "bg-cyan",
    bgSoft: "bg-cyan/10",
    text: "text-cyan",
    shadow: "shadow-cyan/50",
    border: "border-cyan",
    glow: "group-hover:shadow-[0_0_30px_-5px_var(--color-cyan)]"
  },
  magenta: {
    bg: "bg-magenta",
    bgSoft: "bg-magenta/10",
    text: "text-magenta",
    shadow: "shadow-magenta/50",
    border: "border-magenta",
    glow: "group-hover:shadow-[0_0_30px_-5px_var(--color-magenta)]"
  },
  yellow: {
    bg: "bg-yellow",
    bgSoft: "bg-yellow/10",
    text: "text-yellow",
    shadow: "shadow-yellow/50",
    border: "border-yellow",
    glow: "group-hover:shadow-[0_0_30px_-5px_var(--color-yellow)]"
  },
} as const;
