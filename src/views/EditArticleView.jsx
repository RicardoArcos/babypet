import React from 'react'
import { useParams } from 'react-router-dom'
import { EditArticleForm } from '../components/EditArticleForm';
import { TitleBarAdmin } from '../components/TitleBarAdmin';

export const EditArticleView = () => {

  const { id } = useParams();

  return (
    <>
      <TitleBarAdmin />
      <EditArticleForm productID={id}/>
    </>
  )
}
