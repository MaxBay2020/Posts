import moment from "moment";
import Post from "../types/Post";

/**
 * format date as 2022/01/01
 * @param str
 * @returns {string}
 */
export const formatDate = (str: string): string =>
    moment(str).format('YYYY/MM/DD')

/**
 * get initials of a name
 * @param name
 * @returns {string}
 */
export const getInitials = (name: string): string =>
    name.split(' ')[0][0] + name.split(' ')[name.split(' ').length - 1][0].toUpperCase()

/**
 * sort array by createAt field
 * @param posts
 * @returns {*}
 */
export const sortPostsByCreatedTime = (posts: Post[]) :Post[] => {
    return posts.sort((prev, curr) => {
        return moment(curr.createdAt).unix() - moment(prev.createdAt).unix()
    })
}
