/**
 * DATOS MOCK — EMPRESAS RELACIONADAS
 * Preparado para reemplazarse por una API.
 */

export type Company = {
  id: string;
  name: string;
  logo: string;
  sector: string;
  area: string;
};

export const companies: Company[] = [
  { id: "globant", name: "Globant", logo: "GL", sector: "Servicios de tecnología", area: "Desarrollo e IA" },
  { id: "sofka", name: "Sofka Technologies", logo: "SF", sector: "Fábrica de software", area: "Desarrollo" },
  { id: "endava", name: "Endava", logo: "EN", sector: "Consultoría digital", area: "Ingeniería de plataforma" },
  { id: "bancolombia", name: "Bancolombia", logo: "BC", sector: "Servicios financieros", area: "TI y seguridad" },
  { id: "rappi", name: "Rappi", logo: "RP", sector: "Tecnología / Delivery", area: "Producto y datos" },
  { id: "ibm", name: "IBM", logo: "IB", sector: "Tecnología corporativa", area: "Nube e infraestructura" },
  { id: "claro", name: "Claro", logo: "CL", sector: "Telecomunicaciones", area: "Redes y operación" },
  { id: "etek", name: "ETEK International", logo: "ET", sector: "Ciberseguridad", area: "Seguridad de la información" },
  { id: "microsoft", name: "Microsoft", logo: "MS", sector: "Tecnología", area: "Nube e inteligencia artificial" },
];

export const getCompaniesByIds = (ids: string[]) =>
  ids.map((id) => companies.find((c) => c.id === id)).filter(Boolean) as Company[];
