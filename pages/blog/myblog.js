import Layout from '../../components/Layout';
import BlogLayout from '../../components/Blog/Layout';
import { useMyBlog } from '../../hooks/useBlog';
import Loading from '../../components/Loading';
import BlogCard from '../../components/Blog/Card';

export default function myblog() {
    const { data: myBlogData, isLoading } = useMyBlog();

    if (isLoading) return <Loading />;

    return (
        <Layout>
            <BlogLayout>
                <h2 className='md:hidden ml-4 mb-4 text-blue-500'>My Blog</h2>
                <div className='flex flex-col gap-8'>
                    {myBlogData?.map((data, idx) => (
                        <BlogCard key={idx} blogData={data} />
                    ))}
                </div>
            </BlogLayout>
        </Layout>
    );
}
