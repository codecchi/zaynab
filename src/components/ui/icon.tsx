import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  Briefcase,
  Building,
  Clock,
  Compass,
  Eye,
  FileCheck,
  FileSearch,
  GraduationCap,
  Handshake,
  Landmark,
  Lock,
  MessagesSquare,
  Receipt,
  Scale,
  ShieldCheck,
  Target,
  type LucideProps,
} from "lucide-react";
import type { IconKey } from "@/data/types";

const icons: Record<IconKey, React.ComponentType<LucideProps>> = {
  building: Building,
  "file-check": FileCheck,
  receipt: Receipt,
  "book-open-check": BookOpenCheck,
  "file-search": FileSearch,
  compass: Compass,
  briefcase: Briefcase,
  scale: Scale,
  landmark: Landmark,
  handshake: Handshake,
  lock: Lock,
  clock: Clock,
  messages: MessagesSquare,
  "shield-check": ShieldCheck,
  award: Award,
  "graduation-cap": GraduationCap,
  "badge-check": BadgeCheck,
  target: Target,
  eye: Eye,
};

export function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp strokeWidth={1.4} aria-hidden {...props} />;
}
