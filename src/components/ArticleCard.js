import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { Link } from "react-router-dom";

const Users = ({ post }) => {

	return (
		<div className=" flex flex-col bg-gray-50 border-2 rounded p-5 text-justify drop-shadow-2xl w-[390px]">
			<img alt='' className="border-2 rounded p-5" src={post?.data.header.url} />
			<PrismicRichText
				components={{
					heading1: ({ children, key }) => (
						<h3
							key={key}
							className="text-gray-700 text-m p-5 text-center text-2xl font-medium my-4"
						>
							{children}
						</h3>
					),
				}}
				field={post?.data.title}
			/>
			<small className="text-gray-400 text-xs text-center px-5 py-1 text-justify font-medium">
				{" "}
				Date : {post?.data.date}
			</small>
            <PrismicRichText
				components={{
					paragraph: ({ children, key }) => (
						<p
							key={key}
							className="text-gray-400 text-m text-justify p-5 mt-3"
						>
							{children}
						</p>
					),
				}}
				field={post?.data.preview}
			/>
			<Link
				className="flex justify-center mx-5 my-3 p-2 bg-indigo-500 rounded-full font-medium text-white hover:bg-indigo-700"
				to={`/${post?.id}`}
			>
				<button>See the article</button>
			</Link>
		</div>
	);
};

// className="text-gray-400 text-m text-center p-5 bold font-medium mt-3"

export default Users;
