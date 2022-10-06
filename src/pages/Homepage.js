import {
    PrismicRichText,
    useSinglePrismicDocument,
    useAllPrismicDocumentsByType,
  } from '@prismicio/react'
import Grid from "../components/Grid"
import ArticleCard from '../components/ArticleCard'


  
  const App = () => {

    const [document] = useSinglePrismicDocument('homepage')
    const [posts] = useAllPrismicDocumentsByType('post')
  
    console.log(document);

  
  
    return (
      <div>
        {document && (
          <>
         <PrismicRichText
				components={{
					heading1: ({ children, key }) => (
						<h1
							key={key}
							className="text-indigo-500 text-6xl text-center font-medium m-10"
						>
							{children}
						</h1>
					),
				}}
				field={document?.data.title}
			/>
            <Grid>
                {posts?.map((post) =>{
                    return <ArticleCard post={post} />
                })}
            </Grid>
          </>
        )}
      </div>
    )
  }
  
  export default App