import type { Schema, Struct } from '@strapi/strapi';

export interface BlogParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    description: '';
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    height: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    width: Schema.Attribute.Integer;
  };
}

export interface ContentImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_content_image_carousels';
  info: {
    description: '';
    displayName: 'Image Carousel';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    width: Schema.Attribute.Integer;
  };
}

export interface ContentImageFlexbox extends Struct.ComponentSchema {
  collectionName: 'components_content_image_flexboxes';
  info: {
    description: '';
    displayName: 'Image Flexbox';
    icon: 'picture';
  };
  attributes: {
    imageHeight: Schema.Attribute.Integer;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageWidth: Schema.Attribute.Integer;
  };
}

export interface ContentImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_content_image_grids';
  info: {
    description: '';
    displayName: 'Image Grid';
    icon: 'picture';
  };
  attributes: {
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    imageHeight: Schema.Attribute.Integer;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageWidth: Schema.Attribute.Integer;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    description: '';
    displayName: 'Text Block';
    icon: 'bulletList';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<
      ['left', 'center', 'right', 'justify', 'start', 'end']
    >;
    text: Schema.Attribute.Blocks;
  };
}

export interface EventsEvent extends Struct.ComponentSchema {
  collectionName: 'components_events_events';
  info: {
    description: '';
    displayName: 'Event';
    icon: 'alien';
  };
  attributes: {
    dates: Schema.Attribute.Component<'events.event-date', true>;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['Market', 'Con']>;
    url: Schema.Attribute.String;
  };
}

export interface EventsEventDate extends Struct.ComponentSchema {
  collectionName: 'components_events_event_dates';
  info: {
    displayName: 'Event Date';
  };
  attributes: {
    date: Schema.Attribute.Date;
    endTime: Schema.Attribute.Time;
    startTime: Schema.Attribute.Time;
  };
}

export interface InstructionPatternStep extends Struct.ComponentSchema {
  collectionName: 'components_instruction_pattern_steps';
  info: {
    description: '';
    displayName: 'Pattern Step';
    icon: 'check';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    instructions: Schema.Attribute.Blocks;
  };
}

export interface InstructionVariants extends Struct.ComponentSchema {
  collectionName: 'components_instruction_variants';
  info: {
    displayName: 'variants';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    instructions: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface LinksPageLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_page_links';
  info: {
    displayName: 'Page links';
    icon: 'link';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LinksSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social links';
    icon: 'code';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MaterialPatternMaterial extends Struct.ComponentSchema {
  collectionName: 'components_material_pattern_materials';
  info: {
    displayName: 'Pattern Material';
    icon: 'bulletList';
  };
  attributes: {
    amountGrams: Schema.Attribute.Decimal;
    material_group: Schema.Attribute.Relation<
      'oneToOne',
      'api::material-group.material-group'
    >;
    quantity: Schema.Attribute.Integer;
  };
}

export interface MaterialProjectMaterial extends Struct.ComponentSchema {
  collectionName: 'components_material_project_materials';
  info: {
    description: '';
    displayName: 'Project Material';
    icon: 'bulletList';
  };
  attributes: {
    amountGrams: Schema.Attribute.Decimal;
    materialVariant: Schema.Attribute.Relation<
      'oneToOne',
      'api::material-variant.material-variant'
    >;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.paragraph': BlogParagraph;
      'content.image': ContentImage;
      'content.image-carousel': ContentImageCarousel;
      'content.image-flexbox': ContentImageFlexbox;
      'content.image-grid': ContentImageGrid;
      'content.text-block': ContentTextBlock;
      'events.event': EventsEvent;
      'events.event-date': EventsEventDate;
      'instruction.pattern-step': InstructionPatternStep;
      'instruction.variants': InstructionVariants;
      'links.page-links': LinksPageLinks;
      'links.social-links': LinksSocialLinks;
      'material.pattern-material': MaterialPatternMaterial;
      'material.project-material': MaterialProjectMaterial;
    }
  }
}
