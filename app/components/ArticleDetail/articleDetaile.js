import Line from "../Line/line";
import articleImage from "@/app/assets/imags/articleImage.jpg";
import Image from "next/image";

function ArticleDetail() {
  return (
    <article className="flex flex-col gap-2 mx-4 lg:mx-12">
      <div className="relative max-h-[400px] bg-black overflow-hidden ">
        <Image
          src={articleImage}
          className="w-full h-full  object-cover opacity-40"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <p className="font-bold">Title of the article</p>
          <p>Posted date</p>
        </div>
      </div>
      <Line className="min-h-[2px] min-w-full" />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatem accusantium. Quos distinctio quidem nulla aut deleniti porro
        nam, repellendus eius voluptates maxime facilis placeat veritatis,
        fugiat ipsum incidunt obcaecati officia, vitae debitis? Ipsa
        perspiciatis praesentium cum dolore, nesciunt veniam consequatur.
        Placeat a voluptas recusandae nostrum sed voluptatem, saepe autem eum
        consequatur aut odit quas eos explicabo quae necessitatibus totam?
        Expedita necessitatibus eos, consectetur pariatur quisquam dolore beatae
        aut enim ratione quos, porro neque corrupti similique minima quae esse
        nisi officiis reprehenderit. Quaerat nobis, facere eaque sed neque
        molestias! Fugit enim vero quod corrupti. Repellat ipsum dolorem optio
        doloremque asperiores nemo et debitis recusandae, quia saepe cupiditate
        delectus ratione sequi ullam, neque aliquid blanditiis vero voluptatum
        atque assumenda! Illo adipisci nobis vel aperiam voluptatum mollitia
        debitis ullam reiciendis sapiente, suscipit cum quibusdam pariatur error
        dignissimos corrupti obcaecati molestiae alias quas deserunt sint sit
        natus. Molestiae dolore possimus quas suscipit! Veniam, voluptatibus
        distinctio inventore corporis a esse, eveniet tenetur eos fuga quam
      </p>
    </article>
  );
}

export default ArticleDetail;
