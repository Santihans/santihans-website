import EN from '~/assets/locale/services.webdesign.en.json'
import DE from '~/assets/locale/services.webdesign.de.json'

const services = {
  client: {
    selectedSize: 'small',
    size: {
      small: {
        label: 'client.size.small.label',
        hint: 'client.size.small.hint',
        priceMultiplyer: 1
      },
      medium: {
        label: 'client.size.medium.label',
        hint: 'client.size.medium.hint',
        priceMultiplyer: 2
      },
      large: {
        label: 'client.size.large.label',
        hint: 'client.size.large.hint',
        priceMultiplyer: 4
      }
    },
    nonprofit: {
      label: 'client.nonprofit.label',
      hint: 'client.nonprofit.hint',
      selected: false,
      discount: 0.2
    }
  },
  basic: {
    label: 'basic.label',
    description: 'basic.description',
    items: [{
        label: 'basic.items[0].label',
        details: 'basic.items[0].details'
      },
      {
        label: 'basic.items[1].label',
        details: 'basic.items[1].details'
      },
      {
        label: 'basic.items[2].label',
        details: 'basic.items[2].details'
      },
      {
        label: 'basic.items[3].label',
        details: 'basic.items[3].details'
      },
      {
        label: 'basic.items[4].label',
        details: 'basic.items[4].details'
      }
    ]
  },
  advanced: {
    design: {
      label: 'advanced.design.label',
      items: [{
        // Web Design
          label: 'advanced.design.items[0].label',
          details: 'advanced.design.items[0].details',
          hint: 'advanced.design.items[0].hint',
          extra: 'recommended',
          selected: true,
          units: 8,
          rate: 'graphics'
        },
        {
          // Graphic Design
          label: 'advanced.design.items[1].label',
          details: 'advanced.design.items[1].details',
          hint: 'advanced.design.items[1].hint',
          selected: false,
          units: 6,
          rate: 'graphics'
        },
        {
          // Stock Photos
          label: 'advanced.design.items[2].label',
          details: 'advanced.design.items[2].details',
          hint: 'advanced.design.items[2].hint',
          selected: false,
          units: 2,
          rate: 'graphics'
        }
      ]
    },
    functionality: {
      label: 'advanced.functionality.label',
      items: [{
          // CMS
          label: 'advanced.functionality.items[0].label',
          details: 'advanced.functionality.items[0].details',
          hint: 'advanced.functionality.items[0].hint',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          // E-commerce
          label: 'advanced.functionality.items[1].label',
          details: 'advanced.functionality.items[1].details',
          hint: 'advanced.functionality.items[1].hint',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          // Localisation
          label: 'advanced.functionality.items[2].label',
          details: 'advanced.functionality.items[2].details',
          hint: 'advanced.functionality.items[2].hint',
          selected: false,
          units: 12,
          rate: 'development'
        },
        {
          // Forms
          label: 'advanced.functionality.items[3].label',
          details: 'advanced.functionality.items[3].details',
          hint: 'advanced.functionality.items[3].hint',
          selected: false,
          units: 12,
          rate: 'development'
        },
        {
          // Interactive Widgets
          label: 'advanced.functionality.items[4].label',
          details: 'advanced.functionality.items[4].details',
          hint: 'advanced.functionality.items[4].hint',
          selected: false,
          units: 18,
          rate: 'development'
        },
        {
          // Accessibility +
          label: 'advanced.functionality.items[5].label',
          details: 'advanced.functionality.items[5].details',
          hint: 'advanced.functionality.items[5].hint',
          selected: false,
          units: 8,
          rate: 'development'
        },
        {
          // Browsersupport +
          label: 'advanced.functionality.items[6].label',
          details: 'advanced.functionality.items[6].details',
          hint: 'advanced.functionality.items[6].hint',
          selected: false,
          units: 18,
          rate: 'development'
        }
      ]
    },
    infrastructure: {
      label: 'advanced.infrastructure.label',
      items: [{
          // Hosting
          label: 'advanced.infrastructure.items[0].label',
          details: 'advanced.infrastructure.items[0].details',
          hint: 'advanced.infrastructure.items[0].hint',
          extra: 'recommended',
          selected: true,
          units: 1,
          rate: 'hosting',
          recurringYearly: true
        },
        {
          // Personal Domain
          label: 'advanced.infrastructure.items[1].label',
          details: 'advanced.infrastructure.items[1].details',
          hint: 'advanced.infrastructure.items[1].hint',
          selected: false,
          units: 1,
          rate: 'domain',
          recurringYearly: true
        },
        {
          // Personal Email
          label: 'advanced.infrastructure.items[2].label',
          details: 'advanced.infrastructure.items[2].details',
          hint: 'advanced.infrastructure.items[2].hint',
          selected: false,
          units: 1,
          rate: 'email',
          recurringYearly: true
        }
      ]
    },
    support: {
      label: 'advanced.support.label',
      items: [{
          // Basic Support
          label: 'advanced.support.items[0].label',
          details: 'advanced.support.items[0].details',
          hint: 'advanced.support.items[0].hint',
          selected: false,
          units: 1,
          rate: 'support',
          recurringYearly: true
        },
        {
          // Priority Support
          label: 'advanced.support.items[1].label',
          details: 'advanced.support.items[1].details',
          hint: 'advanced.support.items[1].hint',
          selected: false,
          units: 1,
          rate: 'support',
          recurringYearly: true
        }
      ]
    }
  }
}

const messages = {
  messages: {
    en: EN,
    de: DE
  }
}

export {
  services,
  messages
}
