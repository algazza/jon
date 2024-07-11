import React from 'react'
import FormBank from '@/Components/FormBank'
import { formIdentitas } from '@/data'
import Kredit from '@/Components/Form/Kredit'
import Tabungan from '@/Components/Form/Tabungan'

const Home = () => {
  return (
    <div className=''>
      
      <FormBank/>
      <FormBank isiPenting={<Kredit/>} context="kredit"/>
    </div>
  )
}

export default Home