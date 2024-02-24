import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerSplitHeroBanner extends Schema.Component {
  collectionName: 'components_banner_split_hero_banners';
  info: {
    displayName: 'Split Hero Banner';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    ShopCollectionButton: Attribute.Component<
      'button.shop-collection-button',
      true
    >;
    BackgroundImage: Attribute.Media;
    ProductImage: Attribute.Media;
  };
}

export interface ButtonShopCollectionButton extends Schema.Component {
  collectionName: 'components_button_shop_collection_buttons';
  info: {
    displayName: 'Shop Collection Button';
    description: '';
  };
  attributes: {
    ButtonLabel: Attribute.String;
    PathURL: Attribute.String & Attribute.DefaultTo<'/'>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    BrandLogo: Attribute.Media & Attribute.Required;
  };
}

export interface SectionFeaturedProducts extends Schema.Component {
  collectionName: 'components_section_featured_products';
  info: {
    displayName: 'Featured Products';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.split-hero-banner': BannerSplitHeroBanner;
      'button.shop-collection-button': ButtonShopCollectionButton;
      'header.header': HeaderHeader;
      'section.featured-products': SectionFeaturedProducts;
    }
  }
}
