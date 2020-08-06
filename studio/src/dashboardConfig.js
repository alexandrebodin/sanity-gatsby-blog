export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2c3322bd70bbaf49cea517',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6jec218c',
                  apiId: 'c293bc51-6f20-4bf9-8592-665a82b52c0e'
                },
                {
                  buildHookId: '5f2c33229bddf488228dfc3e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6ow76oev',
                  apiId: '093d41dc-c6cd-448c-88a4-13e536beac1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexandrebodin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6ow76oev.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
