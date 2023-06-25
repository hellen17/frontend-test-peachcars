<template>
    <div class="container">
        <Navbar />
        <form>
            <div class="form-items">
                <div class="input-field font-bold">
                    <div class="space-between">
                        <label>Submit a batch</label>
                        <p :style="{ color: '#517148' }" class="count">{{ pigCount }}</p>
                    </div>
                    <input type="range" v-model="rangeValue" min="0" max="36" step="1" required />
                    <div class="space-between font-bold">
                    <small>0</small>
                    <small>36</small>
                    </div>
                </div>                
                <div class="input-field">
                    <label for="breed">Breed</label>
                    <select>
                        <option value="1">Large White</option>
                        <option value="2">Landrace</option>
                        <option value="3">Duroc</option>
                    </select>
                </div>
                <div class="input-field">
                    <label for="age">Age(in months)</label>
                    <select v-model="age">
                        <option value="0-6">0-6 months</option>
                        <option value="6-12">6-12 months</option>
                    </select>
                </div>
                <div class="input-field">
                    <label for="weight">Average weight(in kg)</label>
                    <select v-model="weight">
                        <option value="1-50">1 - 50 kgs</option>
                        <option value="51-100">51 -100 kgs</option>
                        <option value="101-150">101 -150 kgs</option>
                        <option value="151-200">151 -200 kgs</option>
                    </select>
                </div>
                <div class="input-field">
                    <label for="price">Ask price per pig</label>
                    <input type="number" id="price" placeholder="0.00" v-model="pricePerPig" />
                </div>
                <p>Total price: {{ totalPrice }} </p>
                <button @click="submitForm" class="button" type="button">Submit Request</button>
            </div>
        </form>
        <div class="modal-container" v-if="showModal" @click="closeModal">
            <div class="modal-content">
                <img src="@/assets/success.png" width="100" height="100" />
                <p>Request submitted successfully!</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, computed, watch } from 'vue';
    export default {

        setup(){
            const rangeValue = ref(0);
            const showModal = ref(false);
            console.log('showModal', showModal.value)
            const totalPrice = ref(0);
            const age = ref('');
            const weight = ref('');
            const pricePerPig = ref(0);

            const pigCount = computed(() => {
                return rangeValue.value;
            });

            const submitForm = () => {
                showModal.value = true;
            };

            const closeModal = () => {
                showModal.value = false;
            };

            watch([pigCount,age,weight], () => {
                //determine price per pig depending on age and weight

                //age
                if(age.value === '0-6'){
                    pricePerPig.value = 1000;
                }else if(age.value === '6-12'){
                    pricePerPig.value = 2000;
                }

                //weight
                if(weight.value === '1-50'){
                    pricePerPig.value += 1000;
                }else if(weight.value === '51-100'){
                    pricePerPig.value += 2000;
                }else if(weight.value === '101-150'){
                    pricePerPig.value += 3000;
                }else if(weight.value === '151-200'){
                    pricePerPig.value += 4000;
                }

                //total price
                if(pigCount.value){
                    totalPrice.value = pigCount.value * pricePerPig.value;
                }


            });

            return {
                rangeValue,
                pigCount,
                showModal,
                submitForm,
                closeModal,
                totalPrice,
                age,
                weight,
                pricePerPig,

            }

        }

    }
</script>

<style lang="scss" scoped>

.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: 100%;
    padding: 1em;
    margin-bottom: 5em;
    background: #F9F9F9;
;
}

.form-items {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.space-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.font-bold {
    font-weight: 600;
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
input[type="range"]{
  -webkit-appearance: none;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 0px;
  height: 8px;

    &::-webkit-slider-runnable-track{
        height: 8px;
        background-color: #D9D9D9;
        border-radius: 8px;
    }
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 25px;
        height: 25px;
        background-color: #517148;
        border-radius: 50%;
        margin-top: -10px;
    }
}

input, select {
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

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

</style>