const today = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeZone: 'America/Sao_Paulo' }).format(new Date())

const mockedTransactions = [
    {
        id: '1',
        title: 'Dropbox',
        description: 'Assinatura anual',
        value: 144.00,
        invoicedAt: today
    },
    {
        id: '22',
        title: 'Spotify',
        description: 'Assinatura mensal',
        value: 24.00,
        invoicedAt: today
    },
    {
        id: '53',
        title: 'Freelancer',
        description: 'Recebimento pontual',
        value: 421.00,
        receivedAt: today
    },
    
]

export function getRecentTransactions() {
    return mockedTransactions
}

export function getAllTransactions() {
    return [...mockedTransactions, ...mockedTransactions, ...mockedTransactions]
}

export function getBalance() {
    return 6420.00
}