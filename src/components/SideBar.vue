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
            <div class="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 text-white mr-6 cursor-pointer" @click="closeSideBar">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
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