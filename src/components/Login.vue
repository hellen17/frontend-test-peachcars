<template>
    <div class="col-2">
        <div>
            <img alt="image" class="desktop-image" src="@/assets/image-laptop.jpg" width="600" height="600"/>
        </div>
        <div class="container">
            <img alt="image" class="mobile-image" src="@/assets/image.png"/>
            <img alt="logo" src="@/assets/logo.png" />
            <form class="form-items">
                <div class="input-field">
                    <label for="email">Enter your email address</label>
                    <input type="email" id="email" name="email" placeholder="Email address"/>
                </div>
                <div class="input-field">
                    <label for="password">Enter your Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                </div>

                <button class="button" type="button"  @click="handleLogin">Login</button>

                <span class="text-center">
                    <p>Don’t have an account? <a href="">Register</a></p>
                    <a href="">Forgot Password? </a>
                </span>
            </form>
        </div>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    export default {
        setup() {
            const router = useRouter();
            const isLogin = ref(false);

            const handleLogin = () => {
                isLogin.value = true;
                router.push('/');
            }

            return {
                handleLogin,
                isLogin
            }
        }

    }
</script>

<style lang="scss" scoped>
.col-2{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) 
}

.mobile-image{
    display: none;
}
.desktop-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100vh;
}

.form-items {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.input-field label {
  font-weight: 600;
  font-size: 1rem;
}
.input-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

input {
  background-color: #EEEEEE;
  border-radius: 4px;
  border: none;
  padding: 1rem;
}
.button{
    background-color: #212427;
    border-radius: 40px;
    border: none;
    cursor: pointer;
    padding: 12px 130px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
}
.text-center {
    text-align: center;
}
a {
    color: #517148;
    font-weight: bold;
    
}
@media screen and (max-width: 768px) {
    .desktop-image{
        display: none;
    }
    .mobile-image{
        display: block;
        width: 100%;
        height: 100%;
    }
    .col-2{
        grid-template-columns: repeat(1, minmax(0, 1fr)) 
    }
}



</style>