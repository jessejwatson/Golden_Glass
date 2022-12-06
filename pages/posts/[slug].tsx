import { GraphQLClient, gql } from 'graphql-request'
import NavBar from '../../components/navBar';
import { AiOutlineArrowLeft, AiOutlineShareAlt, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link';
import FooterIcons from '../../components/footerIcons'
import styles from '../../styles/Slug.module.css'

const graphcms = new GraphQLClient(
    'https://api-ap-southeast-2.hygraph.com/v2/clazxnzw1231r01uhc0ke79zu/master'
);

const QUERY = gql
`
  query Post($slug: String!) {
    post(where: {slug: $slug}) {
      id
      title
      publishDate
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
    {
        posts {
            slug
        }
    }
`;
  
export async function getStaticPaths() {
    const { posts } = await graphcms.request(SLUGLIST);

    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

  
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
    return (
        <main className='min-h-screen'>
            <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full grid grid-flow-row'>
                <section className='hidden md:block'>
                    <NavBar/>
                </section>

                {/* Cover */}
                <section>
                    <div className='flex justify-center'>
                        <img className='coverImg p-2 object-cover w-full h-80 max-w-6xl' src={post.coverImage.url}/>
                    </div>

                    <div className='px-4 -mt-7 max-w-6xl mx-auto flex justify-between'>
                        <div className=''>
                            <Link href={'/blogList'}>
                                <div className='p-1.5 bg-c-white rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineArrowLeft color='#221D23' size={25}/></div>
                            </Link>
                        </div>
                        <div className='flex gap-x-4'>
                            <Link href={''}>
                                <div className='p-1.5 bg-c-white rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineShareAlt color='#221D23' size={25}/></div>
                            </Link>
                            <Link href={''}>
                                <div className='p-1.5 bg-c-white rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineLike color='#221D23' size={25}/></div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Title and content */}
                <section className='px-10 pt-5 pb-5 flex justify-center'>
                    <div className='font-CormorantG'>
                        <h1 className='text-2xl text-c-green pb-6'>Note: blog is in alpha. Share and Like buttons are not functional.</h1>
                        <h1 className='text-4xl pb-2'>{post.title}</h1>
                        <div className='max-w-3xl'>
                            <div dangerouslySetInnerHTML={{ __html: post.content.html }} className={styles.content}></div>
                        </div>
                    </div>
                </section>

                {/* Socials */}
                <section>
                    <FooterIcons/>
                </section>

            </div>
        </main>
    )
}