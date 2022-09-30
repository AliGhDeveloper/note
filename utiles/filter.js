export default function filtering({router, page, search}){ 
    const path ='/';
    const query = router.query;
    if(page) query.page = page;
    if(search) query.search = search;
    router.push({
        pathname: path,
        query
    })
}