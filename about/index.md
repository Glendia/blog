---
layout: page
title: 关于
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/config/favicon.svg',
    name: 'Glendia',
    title: 'Creator',
    org: 'oisx',
    orgLink: 'https://oisx.cn',
    desc: 'Author of oisx.cn',
    links: [
      { icon: 'github', link: 'https://github.com/Glendia' },
    ],
    sponsor: '/config/favicon.svg',
    actionText: '赞助'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      Dev Logs的发展受到国际团队，其中一些人选择在下面展示。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>