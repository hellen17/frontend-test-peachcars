<template>
      <div class="navbar">
        <div class="nav-links">
            <router-link to="/dashboard">
                Home
            </router-link>
            <router-link to="/sell">
                Submit Batch
            </router-link>
        </div>
        <img src="@/assets/hamburger.png" alt="menu" class="hamburger-menu" />
        <p class="nav-header">Nairobi Sausages</p>
        <img src="@/assets/avatar.png" class="avatar" alt="profile-icon" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
</script>

<style lang="scss">
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}
.nav-links{
    display: flex;
    gap: 2rem;
}
a{
    text-decoration: none;
    color: #000;
}
.nav-header{
    font-weight: 700;
}
.avatar, .hamburger-menu{
    cursor: pointer;
}
.hamburger-menu{
    display: none;
}

@media screen and (max-width: 768px) {
    .nav-links{
        display: none;
    }
    .hamburger-menu{
        display: block;
    }
}

</style>