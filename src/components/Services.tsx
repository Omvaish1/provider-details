import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <div className="services-container">
      <h3>Services</h3>
      <div className="services">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
