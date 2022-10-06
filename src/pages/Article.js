import {
    PrismicRichText,
    usePrismicDocumentByID 
  } from '@prismicio/react'
import { useParams } from 'react-router-dom'

const Article = () => {

    const params = useParams()

    const [document] =
    usePrismicDocumentByID(params.id)

    console.log(document);

  return (
    <div>
    {document && (
     <>
        <section className='flex justify-center'>
        <div className=" flex flex-col bg-gray-50 border-2 object-center rounded p-5 text-justify drop-shadow-2xl w-[70%]">
            <PrismicRichText
				components={{
					heading1: ({ children, key }) => (
						<h3
							key={key}
							className="text-indigo-500 text-6xl text-center font-medium m-5"
						>
							{children}
						</h3>
					),
				}}
				field={document?.data.title}
			/>
            <img alt="" className="w-[60%] h-auto mx-auto my-20" src={document?.data.header.url}/>
            <small className="text-gray-400 text-m text-center px-5 py-1 text-justify font-medium italic"> Date : {document?.data.date}</small>          
            <PrismicRichText
				components={{
					paragraph: ({ children, key }) => (
						<p
							key={key}
							className="text-gray-400 text-xl text-justify p-5 mt-3"
						>
							{children}
						</p>
					),
				}}
				field={document?.data.preview}
			/>
            <PrismicRichText
				components={{
					paragraph: ({ children, key }) => (
						<p
							key={key}
							className="text-gray-400 text-lg text-center p-5 text-justify italic "
						>
							{children}
						</p>
					),
				}}
				field={document?.data.content}
			/>
        </div>
        </section>
    </>
    )}
  </div>
  )
}

export default Article

