interface Filters {
  title: string
  options: {
    label: string
    value: number | string
  }[]
}
const filters: Filters[] = [
  {
    title: "Ordenar por",
    options: [
      { label: "Do maior para o menor", value: "largest to smallest" },
      { label: "Do menor para o maior", value: "smallest to largest" },
    ],
  },
  {
    title: "Preço",
    options: [
      { label: "Até R$ 70,00", value: 70 },
      { label: "Até R$ 100,00", value: 100 },
      { label: "Até R$ 150,00", value: 150 },
      { label: "Até R$ 200,00", value: 200 },
    ],
  },
  {
    title: "Score",
    options: [
      {
        label: "Acima de 50",
        value: 50,
      },
      {
        label: "Acima de 100",
        value: 100,
      },
      {
        label: "Acima de 150",
        value: 150,
      },
      {
        label: "Acima de 200",
        value: 200,
      },
    ],
  },
  {
    title: "Ordem alfabética",
    options: [
      {
        label: "A-Z",
        value: "a-z",
      },
      {
        label: "Z-A",
        value: "z-a",
      },
    ],
  },
]
export default filters
