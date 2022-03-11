import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'w287kkjh',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skSetrXjU4NeSXTaXVjI0ls22PFcBnGkyx60pzNuaj2nlHepoZuNtVc5oftLhtpuNODAEKAsbG5BZse689jaUw4WMjS6102uRIbj7X8263ShdarLpKdcrcg56OYVU1WofHEGIeNlUoC7TrnuAK7AE2GV0yAmVP1zlhJP94kL5F7PrkdQj1VY',
    useCdn: false,
})