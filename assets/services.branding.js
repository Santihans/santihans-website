import EN from '~/assets/locale/services.branding.en.json'
import DE from '~/assets/locale/services.branding.de.json'

const services = {
  client: {
    label: 'client.label',
    hint: 'client.hint',
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
        priceMultiplyer: 3
      },
      large: {
        label: 'client.size.large.label',
        hint: 'client.size.large.hint',
        priceMultiplyer: 10
      }
    },
    nameExists: {
      label: 'client.nameExists.label',
      hint: 'client.nameExists.hint',
      selected: true
    },
    nonprofit: {
      label: 'client.nonprofit.label',
      hint: 'client.nonprofit.hint',
      selected: false,
      discount: 0.2
    }
  },
  advanced: {
    name: {
      label: 'advanced.name.label',
      items: [{
          // Name Research
          label: 'advanced.name.items[0].label',
          details: 'advanced.name.items[0].details',
          hint: 'advanced.name.items[0].hint',
          hidden: 'services.client.nameExists.selected',
          selected: false,
          units: 8,
          rate: 'copywriter'
        },
        {
          // Name Workshop
          label: 'advanced.name.items[1].label',
          details: 'advanced.name.items[1].details',
          hint: 'advanced.name.items[1].hint',
          hidden: 'services.client.nameExists.selected',
          selected: false,
          units: 8,
          rate: 'workshop'
        },
        {
          // Domain
          label: 'advanced.name.items[2].label',
          details: 'advanced.name.items[2].details',
          hint: 'advanced.name.items[2].hint',
          selected: false,
          units: 4,
          rate: 'org'
        },
        {
          // Tagline/Slogan
          label: 'advanced.name.items[3].label',
          details: 'advanced.name.items[3].details',
          hint: 'advanced.name.items[3].hint',
          selected: false,
          units: 8,
          rate: 'copywriter'
        }
      ]
    },
    design: {
      label: 'advanced.design.label',
      items: [{
          // Logo/Trademark
          label: 'advanced.design.items[0].label',
          details: 'advanced.design.items[0].details',
          hint: 'advanced.design.items[0].hint',
          extra: 'recommended',
          selected: true,
          units: 8,
          rate: 'graphics'
        },
        {
          // Brand Assets
          label: 'advanced.design.items[1].label',
          details: 'advanced.design.items[1].details',
          hint: 'advanced.design.items[1].hint',
          selected: false,
          units: 6,
          rate: 'graphics'
        },
        {
          // Style Guide
          label: 'advanced.design.items[2].label',
          details: 'advanced.design.items[2].details',
          hint: 'advanced.design.items[2].hint',
          extra: 'recommended',
          selected: false,
          units: 12,
          rate: 'graphics'
        },
        {
          // Style Guide: UI
          label: 'advanced.design.items[3].label',
          details: 'advanced.design.items[3].details',
          hint: 'advanced.design.items[3].hint',
          selected: false,
          units: 10,
          rate: 'graphics'
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
