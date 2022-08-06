import { ReactNode } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar, Sidebar } from '../ui'

interface LayoutProps {
  title?: string
  children: ReactNode
}

const Layout = ({ title = 'OpenJira', children }: LayoutProps) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{ title }</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ paddingTop: '10px 20px' }}>
        { children }
      </Box>

    </Box>
  )
}

export default Layout