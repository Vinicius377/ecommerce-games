interface Filters {
  title: string
  options: {
    title: string
    value: number | string
  }[]
}
const filters: Filters[] = [
  {
    title: "Ordenar por",
    options: [
      { title: "Do maior para o menor", value: "largest to smallest" },
      { title: "Do menor para o maior", value: "smallest to largest" },
    ],
  },
  {
    title: "Preço",
    options: [
      { title: "Até R$ 70,00", value: 70 },
      { title: "Até R$ 100,00", value: 100 },
      { title: "Até R$ 150,00", value: 150 },
      { title: "Até R$ 200,00", value: 200 },
    ],
  },
  {
    title: "Score",
    options: [
      {
        title: "Acima de 50",
        value: 50,
      },
      {
        title: "Acima de 100",
        value: 100,
      },
      {
        title: "Acima de 150",
        value: 150,
      },
      {
        title: "Acima de 200",
        value: 200,
      },
    ],
  },
  {
    title: "Ordem alfabética",
    options: [
      {
        title: "A-Z",
        value: "a-z",
      },
      {
        title: "Z-A",
        value: "z-a",
      },
    ],
  },
]
export default filters
