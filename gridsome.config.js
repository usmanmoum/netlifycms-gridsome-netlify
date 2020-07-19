// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'United Professional Associations (UNIPRO)',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Netlify CMS for content.',

  templates: {
    Entrepreneurship: '/activities/entrepreneurship/:year-:month-:day-:title',
    Education: '/activities/education/:year-:month-:day-:title',
    General: '/activities/general/:year-:month-:day-:title'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Entrepreneurship',
        path: 'content/entrepreneurship/*.md'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Education',
        path: 'content/education/*.md'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'General',
        path: 'content/general/*.md'
      }
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
