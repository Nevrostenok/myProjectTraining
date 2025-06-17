import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore } from '../src/store/taskStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('taskStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('добавляет задачу', () => {
        const store = useTaskStore()
        store.addTask('Проверка')

        expect(store.tasks.length).toBeGreaterThan(0)
        expect(store.tasks[store.tasks.length - 1].text).toBe('Проверка')
    })

    it('удаляет задачу', () => {
        const store = useTaskStore()
        store.addTask('Для удаления')
        const id = store.tasks[store.tasks.length - 1].id
        store.removeTask(id)

        expect(store.tasks.find(t => t.id === id)).toBeUndefined()
    })
})
