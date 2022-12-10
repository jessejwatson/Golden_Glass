import { useState } from 'react';
import { GraphQLClient, gql } from 'graphql-request'
import NavBar from '../../components/navBar';
import { AiOutlineArrowLeft, AiOutlineShareAlt, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link';
import FooterIcons from '../../components/footerIcons'
import styles from '../../styles/Slug.module.css'
import ShareScreen from '../../components/shareScreen';

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
    const { posts }: {posts:Array<any>} = await graphcms.request(SLUGLIST);

    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

  
export async function getStaticProps({ params }: {params:any}) {
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

export default function BlogPost({ post }: {post:any}) {
    const [show, setShow] = useState(false);

    return (
        <main className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-screen min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-c-green scrollbar-track-c-blue'>
            <div className='h-full flex flex-col justify-between'>
                <div>

                    {
                        show && <div className='flex flex-col justify-center items-center h-screen w-screen fixed bg-c-blue bg-opacity-50'>
                                    <div className='flex flex-col justify-center items-center bg-gradient-to-br from-c-charcoal to-c-blue shadow-2xl py-10 px-24 rounded-xl gap-y-8'>
                                        <button className='hover:bg-c-blue active:opacity-90 border-c-green border-2 text-c-green rounded-full py-2 px-5' onClick={()=>setShow(!show)}>Close</button>
                                        <ShareScreen slug={post.slug} title={post.title}/>
                                    </div>
                                </div>
                    }

                    <section className='hidden md:block'>
                        <NavBar/>
                    </section>

                    {/* Cover */}
                    <section className='animate-fade-in-down'>
                        <div className='flex justify-center'>
                            <img className='coverImg shadow-2xl p-2 object-cover w-full h-80 max-w-6xl' src={post.coverImage.url} alt={'Cover Image'}/>
                        </div>

                        <div className='px-4 -mt-7 max-w-6xl mx-auto flex justify-between'>
                            <div className=''>
                                <Link href={'/blog'}>
                                    <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineArrowLeft color='#221D23' size={25}/></div>
                                </Link>
                            </div>
                            <div className='flex gap-x-4'>
                                <div onClick={()=>setShow(!show)}>
                                    <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineShareAlt color='#221D23' size={25}/></div>
                                </div>
                                <Link href={''}>
                                    <div className='p-1.5 bg-c-white shadow-2xl rounded-full w-fit hover:translate-y-1 active:opacity-90'><AiOutlineLike color='#221D23' size={25}/></div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Title and content */}
                    <section className='mb-auto px-10 pt-5 pb-5 flex justify-center animate-fade-in-up'>
                        <div className='font-CormorantG'>
                            {/*<h1 className='text-2xl text-c-green pb-6'>Note: blog is in alpha. Share and Like buttons are not functional.</h1>*/}
                            {/* Author and publish date */}
                            <div className='flex justify-between font-semibold border-b-2 border-c-grey p-2 mb-4'>
                                <div className='flex gap-x-4 pb-2'>
                                    <img className='flatImg w-12 h-auto my-auto' src={post.author.avatar.url} alt="Author Avatar" />
                                    <div className='my-auto'>
                                        <p className='text-xl text-c-grey'>Written by:</p>
                                        <p className='text-xl'>{post.author.name}</p>
                                    </div>
                                </div>
                                
                                <div className='my-auto'>
                                    <p className='text-xl'>{post.publishDate}</p>
                                </div>
                            </div>
                            <h1 className='text-4xl pb-2'>{post.title}</h1>
                            <div className='w-screen max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl'>
                                <div dangerouslySetInnerHTML={{ __html: post.content.html }} className={styles.content}></div>
                            </div>
                        </div>
                    </section>

                </div>
                <div>

                    {/* Socials */}
                    <section>
                        <FooterIcons/>
                    </section>
                </div>

            </div>
        </main>
    )
}