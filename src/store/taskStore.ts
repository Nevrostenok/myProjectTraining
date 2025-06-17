import { defineStore } from 'pinia'

export type Task = {
    id: number
    text: string
    done: boolean
}

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [] as Task[],
        nextId: 1,
    }),

    actions: {
        addTask(text: string) {
            this.tasks.push({ id: this.nextId++, text, done: false })
        },

        toggleTask(id: number) {
            const task = this.tasks.find(t => t.id === id)
            if (task) task.done = !task.done
        },

        removeTask(id: number) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        },
    },
})
