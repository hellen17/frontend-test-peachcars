<template>
    <div class="card">
        <div class="card-body">
            <p class="card-title">Farm</p>
            <div class="line flex">
                <p class="number">2</p>
                <p class="text">Kiambu County</p>
            </div>
            <button class="button btn-yellow">Order Feeds</button>
        </div>
        <div class="card-body">
            <p class="card-title">Pigs</p>
            <div class="line flex">
                <p class="number">36</p>
                <p class="text">Large White</p>
            </div>
            <button @click="handleSubmit" class="button btn-green">Sell a Batch</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        const handleSubmit = () => {
            console.log('clicked');
            router.push('/sell');
        }
        return {
            handleSubmit
        }
    }

}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.card-body {
  background-color: #fff;
  padding: 2rem;
  width: max-content;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.card-title {
    color: #517148;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 10px;
    text-transform: uppercase;
    margin: 0px;
}

.button {
    border-radius: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    cursor: pointer;
    padding: 10px 30px;
  }

  .text {
    font-weight: 600;
    font-size: 18px;
    line-height: 12px;
    text-transform: uppercase;
    color: #595959;
  }

  .btn-yellow {
    border: 0px;
    width: 100%;
    background: #F3D052;
  }

  .btn-green {
    border: 0px;
    width: 100%;
    color: #fff;
    background: #517148;
  }


  .number {
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin: 0px;
  }

  .flex {
    display: flex;
    align-items: center;
    padding: 20px;
    > * + * {
    margin-left: 10px;
  }
  }

  .line {
    display: flex;

    > * + *::before {
      content: '';
      border-left: 1px solid #9D9D9D;
      margin-left: 10px;
      margin-right: 10px;
    }
  }

@media (max-width: 640px) {
  .flex {
    padding: 5px;
  }

  .card-body {
    width: 300px;
  }
  .card {
    flex-direction: column;
  }

  .button {
    padding: 10px 10px;
  }
}


</style>