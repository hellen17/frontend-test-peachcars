<template>
    <div class="posts">
        <div v-for="post in posts" :key="post.id" class="card">
            <div>
                <img class="image" :src="post.image" :alt="post.title" height="90" width="90" />
            </div>
            <div>
                <p class="post-title">{{ post.title }}</p>
                <div class="post-tags">
                    <span v-for="tag in post.tags" :key="tag">
                        <span :style="getTagStyle(tag)" class="tag">{{ tag }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import posts from '@/data/posts.json'
    console.log('posts', posts)


    const getTagStyle = (tag) => {
  // Define colors based on the tag property
  const tagColors = {
    blueberries: {
      backgroundColor: 'rgba(82, 137, 244, 0.20)',
      color: '#6092F5',
      borderColor: 'rgba(82, 137, 244, 0.90)',
    },
    lemon: {
      backgroundColor: 'rgba(243, 208, 82, 0.20)',
      color: '#F3D052',
      borderColor: 'rgba(244, 208, 82, 0.90)',
    },
    chicken: {
      backgroundColor: 'rgba(255, 136, 133, 0.2)',
      color: '#FF8885',
      borderColor: 'rgba(255, 136, 133, 0.9)',
    },
    strawberry: {
      backgroundColor: 'rgba(255, 0, 89, 0.2)',
      color: '#FF0059',
      borderColor: 'rgba(255, 0, 89, 0.9)',
    },
    pancakes: {
      backgroundColor: 'rgba(244, 150, 82, 0.20)',
      color: '#F59E60',
      borderColor: 'rgba(244, 150, 82, 0.90)',
    },
  };

  // Return the colors based on the tag property, or fallback colors if not found
  return tagColors[tag.toLowerCase()] || {
    backgroundColor: 'rgba(244, 150, 82, 0.2)',
    color: '#F59E60',
    borderColor: 'rgba(244, 150, 82, 0.9)',
  };
}


</script>

<style lang="scss" scoped>
.posts{
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 2em;
    align-content: center;
}
 .card{
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-basis: calc(33.33% - 2em); /* Set width for three cards per row with 2em gap */
    gap: 2em;
    padding: 10px;
 }
 .image{
    // width: 100%;
    // height: 100%;
    border-radius: 1px;
    object-fit: cover;
 }
 .post-title{
    font-size: 12px;
    font-weight: 600;
    line-height: 17px;
    margin-bottom: 0.8rem;
    text-align: left;

 }
.post-tags{
    display: flex;
    gap: 0.2em;
    margin-top: 0.2em;
 }
 .tag{
    padding: 3px 13px;
    border-radius: 40px;
    border: 1px solid;
    cursor: pointer;
    
 }

 @media screen and (max-width: 768px) {
    .posts{
        flex-direction: column;
    }
 }

</style>