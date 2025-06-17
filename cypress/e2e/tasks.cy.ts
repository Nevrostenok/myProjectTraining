describe('Task App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173') // порт по умолчанию у Vite
    })

    it('Добавляет новую задачу', () => {
        cy.get('input[type="text"]').type('Протестировать задачу')
        cy.contains('Добавить').click()
        cy.contains('Протестировать задачу').should('exist')
    })

    it('Удаляет задачу', () => {
        cy.get('input[type="text"]').type('Удалить эту задачу')
        cy.contains('Добавить').click()
        cy.contains('Удалить эту задачу').parent().contains('✕').click()
        cy.contains('Удалить эту задачу').should('not.exist')
    })
})
