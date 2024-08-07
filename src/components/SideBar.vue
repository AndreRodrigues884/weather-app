<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true
        },
    },
    emits: ['close'],
    setup(props, { emit }) {
        const closeSideBar = () => {
            emit('close')
        }

        return {
            closeSideBar
        }
    }
}
</script>


<template>
    <transition name="slide">
        <aside v-if="isOpen" class="fixed inset-y-0 right-0 w-64 bg-gray-800 text-white p-4">
            <button @click="closeSideBar" class="text-white">Close</button>
            <nav>
                <ul>
                    <li class="mb-2"><a href="#" class="block p-2 rounded hover:bg-gray-700">Home</a></li>
                    <li class="mb-2"><a href="#" class="block p-2 rounded hover:bg-gray-700">About</a></li>
                    <li class="mb-2"><a href="#" class="block p-2 rounded hover:bg-gray-700">Services</a></li>
                    <li class="mb-2"><a href="#" class="block p-2 rounded hover:bg-gray-700">Contact</a></li>
                </ul>
            </nav>
        </aside>
    </transition>
</template>



<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}
</style>