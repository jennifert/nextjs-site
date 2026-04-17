import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const notesDirectory = path.join(process.cwd(), 'content', 'notes')

export function getAllNoteSlugs() {
    return fs
        .readdirSync(notesDirectory)
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace(/\.mdx$/, ''))
}

export function getAllNotesMeta() {
    const files = fs
        .readdirSync(notesDirectory)
        .filter((file) => file.endsWith('.mdx'))

    const notes = files.map((file) => {
        const fullPath = path.join(notesDirectory, file)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
            slug: file.replace(/\.mdx$/, ''),
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            tags: data.tags || [],
            draft: data.draft || false,
        }
    })

    return notes
        .filter((note) => !note.draft)
        .sort((a, b) => {
            const aDate = a.date ? new Date(a.date).getTime() : 0
            const bDate = b.date ? new Date(b.date).getTime() : 0

            if (bDate !== aDate) {
                return bDate - aDate
            }

            return a.title.localeCompare(b.title)
        })
}