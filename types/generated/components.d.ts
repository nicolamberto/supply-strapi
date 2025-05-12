import type { Schema, Struct } from '@strapi/strapi';

export interface TechnicalsDetailsTechicalDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_technicals_details_techical_details';
  info: {
    description: '';
    displayName: 'techicalDetails';
  };
  attributes: {
    capacity: Schema.Attribute.String;
    ecofriendly: Schema.Attribute.String;
    loadCapacity: Schema.Attribute.String;
    material: Schema.Attribute.String;
    thermalSpectrum: Schema.Attribute.String;
    variants: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'technicals-details.techical-details': TechnicalsDetailsTechicalDetails;
    }
  }
}
