export interface IDTO<Entity> {
  importEntity(entity: Entity): void;
  toEntity(): Entity;
}
