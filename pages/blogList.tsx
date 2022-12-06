import { GraphQLClient, gql } from 'graphql-request'
import BlogCard from "../components/blogCard";
import NavBar from '../components/navBar';

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-ap-southeast-2.hygraph.com/v2/clazxnzw1231r01uhc0ke79zu/master'
    );

  const { posts } = await graphcms.request(
    `
      {
        posts {
          id,
          title,
          publishDate,
          slug,
          content {
            html
          }
          author {
            name,
            avatar {
              url,
            }
          }
          coverImage {
            url
          }
        }
      }
    `
  );

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function BlogList({ posts }) {
    return (
      <div className='h-screen'>
        <div className='font-FiraCode bg-gradient-to-br from-c-charcoal to-c-blue text-c-white h-full'>
          <div>
            <NavBar/>
          </div>
          <main className='pt-10'>
            <div className="flex flex-wrap flex-col gap-y-10 content-center">
              {posts.map((post) => (
                <BlogCard key={'key'} id={post.id} title={post.title} publishDate={post.publishDate} slug={post.slug} contentHTML={post.content.html} authorName={post.author.name} avatarURL={post.author.avatar.url} coverImageURL={post.coverImage.url}/>
              ))}
            </div>
          </main>
        </div>
      </div>
    )
}