import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export type Subject = {
  id: string
  name: string
  kind: 'Экзамен' | 'Зачёт'
  teacher?: string
  status: 'Идёт' | 'Завершён'
}

export type Student = {
  fullName: string
  course: number
  program: string
  subjects: Subject[]
  avgGrade: number // 0..5
}

export const useStudentStore = defineStore('student', () => {
  const student = ref<Student>({
    fullName: 'Иванов Иван Иванович',
    course: 2,
    program: 'Прикладная математика и информатика',
    avgGrade: 4.3,
    subjects: [
      { id: 's1', name: 'Алгоритмы и структуры данных', kind: 'Экзамен', teacher: 'Петров П.П.', status: 'Идёт' },
      { id: 's2', name: 'Базы данных', kind: 'Экзамен', teacher: 'Сидоров С.С.', status: 'Идёт' },
      { id: 's3', name: 'ОС и сети', kind: 'Зачёт', teacher: 'Иванова А.А.', status: 'Идёт' },
      { id: 's4', name: 'Математический анализ', kind: 'Экзамен', status: 'Завершён' },
      { id: 's5', name: 'Английский язык', kind: 'Зачёт', status: 'Идёт' },
    ],
  })

  const avgPercent = computed(() => {
    // 0..5 -> 0..100
    const v = Math.max(0, Math.min(5, student.value.avgGrade))
    return Math.round((v / 5) * 100)
  })

  function updateProfile(patch: Partial<Pick<Student, 'fullName' | 'program' | 'course'>>) {
    student.value = { ...student.value, ...patch }
  }

  return { student, avgPercent, updateProfile }
})
