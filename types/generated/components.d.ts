import type { Schema, Attribute } from '@strapi/strapi';

export interface DynamicFieldDynamicField extends Schema.Component {
  collectionName: 'components_dynamic_field_dynamic_fields';
  info: {
    displayName: 'dynamic-field';
    icon: 'layer';
    description: '';
  };
  attributes: {
    paramName: Attribute.String & Attribute.Required;
    paramValue: Attribute.String & Attribute.Required;
  };
}

export interface DynamicFieldsDynamicFields extends Schema.Component {
  collectionName: 'components_dynamic_fields_dynamic_fields';
  info: {
    displayName: 'dynamic-fields';
    icon: 'layer';
    description: '';
  };
  attributes: {
    param: Attribute.Component<'dynamic-field.dynamic-field'>;
  };
}

export interface PicturePicture extends Schema.Component {
  collectionName: 'components_picture_pictures';
  info: {
    displayName: 'picture';
    icon: 'picture';
    description: '';
  };
  attributes: {
    picture: Attribute.Media & Attribute.Required;
  };
}

export interface PicturesViaLinksPicturesViaLinks extends Schema.Component {
  collectionName: 'components_pictures_via_links_pictures_via_links';
  info: {
    displayName: 'picturesViaLinks';
    icon: 'picture';
    description: '';
  };
  attributes: {
    picture: Attribute.JSON & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dynamic-field.dynamic-field': DynamicFieldDynamicField;
      'dynamic-fields.dynamic-fields': DynamicFieldsDynamicFields;
      'picture.picture': PicturePicture;
      'pictures-via-links.pictures-via-links': PicturesViaLinksPicturesViaLinks;
    }
  }
}
