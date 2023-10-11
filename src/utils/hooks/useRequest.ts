import { useCallback, useState } from 'react'
import {
  getBannerList,
  getArchiveList,
  getCVList,
  getCVTree,
  getCalendar,
} from '@/api'

interface Banner {
  id: number
  name: string
  poster: string
  pv: string
  type: string
}

interface BannerListResponse {
  bannerVOList: Banner[]
  md5Hash: string
  name: string
  time: number
}

// -----------------------------------

interface ArchiveResponse {
  id: string
  name: string
}

interface CvListResponse {
  code: string
  cover: string
  id: number
  name: string
  url: string
}

// -----------------------------------

type Category = {
  color: string
  label: string
}

type Edge = {
  categorie: string
  categorie2: string
  direction: boolean
  from: number
  id: number
  label: string
  to: number
}

type Node = {
  categorie: string
  id: number
  image: string
  info: string
  label: string
}

// -----------------------------------

type CVListData = {
  categories: Record<string, Category>
  data: {
    edges: Edge[]
    nodes: Node[]
  }
}

// -----------------------------------

interface CalendarItem {
  weekday: WeekDay
  items: Array<AnimeItemInfo>
}

type WeekDay = {
  id: string | number
  cn: string
  en: string
}

type AnimeItemInfo = {
  id: string | number
  fanName: string
  poster: string
  total: number
  tag: string
  descInfo: string
}

export const useGetBannerList = () => {
  const [banner, setBannner] = useState<BannerListResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const updateBannerList = useCallback(async (selectedValue: string) => {
    try {
      setLoading(true)
      let response = await getBannerList(selectedValue)
      setBannner(response)
      setLoading(false)
      return response
    } catch (error) {}
  }, [])

  return {
    banner,
    setBannner,
    updateBannerList,
    loading,
  }
}

export const useGetArchiveList = () => {
  const [archive, setArchive] = useState<ArchiveResponse[]>([])
  const [loading, setLoading] = useState(false)

  const updateArchiveList = useCallback(async () => {
    try {
      setLoading(true)
      let response = await getArchiveList()
      setArchive(response)
      setLoading(false)
      return response
    } catch (error) {}
  }, [])

  return {
    archive,
    setArchive,
    updateArchiveList,
    loading,
  }
}

export const useGetCVList = () => {
  const [cvlist, setCVList] = useState<CvListResponse[]>([])
  const [loading, setLoading] = useState(false)

  const updateCVList = useCallback(async () => {
    try {
      setLoading(true)
      let response = await getCVList()
      setCVList(response)
      setLoading(false)
      return response
    } catch (error) {}
  }, [])

  return {
    cvlist,
    setCVList,
    updateCVList,
    loading,
  }
}

export const useGetCVTree = () => {
  const [cvtree, setCVTree] = useState<CVListData[]>([])
  const [loading, setLoading] = useState(false)

  const updateCVTree = useCallback(async (selectedValue: string) => {
    try {
      setLoading(true)
      let response = await getCVTree(selectedValue)
      setCVTree(response)
      setLoading(false)
      return response
    } catch (error) {}
  }, [])

  return {
    cvtree,
    setCVTree,
    updateCVTree,
    loading,
  }
}

export const useGetAnime = () => {
  const [anime, setAnime] = useState<CalendarItem[]>([])
  const [loading, setLoading] = useState(false)

  const updateAnime = useCallback(async () => {
    try {
      setLoading(true)
      let response = await getCalendar()
      setAnime(response)
      setLoading(false)
      return response
    } catch (error) {}
  }, [])

  return {
    anime,
    setAnime,
    updateAnime,
    loading,
  }
}
