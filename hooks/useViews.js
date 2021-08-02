import useSWR from 'swr';

const useViews = (slug) => {
  const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
  };

  const { data, error } = useSWR(`/api/views/${slug}`, fetcher);

  return {
    views: data?.views || 0,
    isError: error || false,
    isLoading: !error && !data,
  };
};

export default useViews;
