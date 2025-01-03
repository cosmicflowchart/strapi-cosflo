import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'events.event': EventsEvent;
      'events.event-date': EventsEventDate;
      'instruction.pattern-step': InstructionPatternStep;
      'instruction.variants': InstructionVariants;
      'links.page-links': LinksPageLinks;
      'links.social-links': LinksSocialLinks;
    }
  }
}
