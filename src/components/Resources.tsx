import { ResourceCard } from "./ResourceCard";

export function Resources() {
  return (
    <div className="resources">
      <h5>Available Audios/ Videos</h5>
      <div className="resource-cards">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}
